import { Controller, Get, Post, Body,Patch, Param,Delete, ParseUUIDPipe, UseInterceptors, UploadedFile} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { EmployeesService } from "./employees.service";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { ROLES } from "src/auth/constants/roles.constants";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Employee } from "./entities/employee.entity";
import { AwsService } from "src/aws/aws.service";
import { ApiAuth } from "src/auth/decorators/api.decorators";

//I honestly dont know how half of this works 

@ApiAuth()
@ApiTags("Employees")
@Controller("employees")
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly awsService: AwsService,
  ) {}

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
      employeeId: "UUID",
      employeeName: "Otto",
      employeeEmail: "Otto@gmail.com",
      employeeLastName: "De Acha",
      employeePhoneNumber: "4421112233",
    } as Employee,
  })

  @Post()
  @UseInterceptors(FileInterceptor("employeePhoto"))
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
    @UploadedFile() file: Express.Multer.File,
  ){
    if (!file) {
      return this.employeesService.create(createEmployeeDto);
    } 
    else {
      const photoUrl = await this.awsService.uploadFile(file);
      createEmployeeDto.employeePhoto = photoUrl;
      return this.employeesService.create(createEmployeeDto);
    } //this hurts
  }

  @Auth(ROLES.MANAGER, ROLES.EMPLOYEE)
  @Post(":id/upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadPhoto(
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File,) 
    {
    const response = await this.awsService.uploadFile(file);
    return this.employeesService.update(id, {
      emplyeePhoto: response,
    });
  }

  @Auth(ROLES.MANAGER)
  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Auth(ROLES.MANAGER)
  @Get("/:id")
  findOne(
    @Param("id", new ParseUUIDPipe({ version: "4" }))id: string)
  {
    return this.employeesService.findOne(id);
  }

  @Auth(ROLES.MANAGER)
  @Get("/location/:id")
  findAllLocation(@Param("id") id: string) {
    return this.employeesService.findByLocation(+id);
  }

  @Auth(ROLES.EMPLOYEE)
  @UseInterceptors(FileInterceptor("employeePhoto"))
  @Patch("/:id")
  async update(
    @Param("id", new ParseUUIDPipe({ version: "4" })) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
    @UploadedFile() file: Express.Multer.File)
  {
    if (file.originalname == "undefined") {
      return this.employeesService.update(id, updateEmployeeDto);
    } else {
      const fileUrl = await this.awsService.uploadFile(file);
      updateEmployeeDto.employeePhoto = fileUrl;
      return this.employeesService.update(id, updateEmployeeDto);
    }
  }

  @Auth(ROLES.MANAGER)
  @Delete("/:id")
  remove(
    @Param("id", new ParseUUIDPipe({ version: "4" }))
    id: string,) 
    {
    return this.employeesService.remove(id);
  }
}