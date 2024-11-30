import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ROLES } from 'src/auth/constants/roles.constants';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from './entities/employee.entity';
import { ApiAuth } from 'src/auth/decorators/api.decorators';

//Do later

@ApiAuth()
@ApiTags('employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Auth(ROLES.MANAGER)
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Auth(ROLES.MANAGER, ROLES.EMPLOYEE)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadPhoto(@UploadedFile() file: Express.Multer.File){

    return 'ok';
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example:{
      employeeId: "UUID",
      employeeName: "Otto",
      employeeLastName: "De Acha",
      employeeEmail: "otto@gmail.com",
      employeePhoneNumber: "442XXXXXXX",
      employeePhotoUrl: "url"
    } as Employee
  })

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Auth(ROLES.MANAGER)
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({version: "4"})) id: string) {
    return this.employeesService.findOne(id);
    }

    @Auth(ROLES.MANAGER)
    findAllLocation(@Param('id') id:string){
      return this.employeesService.findByLocation(+id)
    }

  @Auth(ROLES.MANAGER, ROLES.EMPLOYEE)
  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe({version: "4"})) id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Auth(ROLES.MANAGER)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({version: "4"})) id: string) {
    return this.employeesService.remove(id);
  }
}
