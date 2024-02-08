import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsUUID, isURL, IsUrl, IsAscii, IsAlphanumeric, IsIn, ValidateNested, IsOptional } from 'class-validator';
import { CreateWerkprocesDto, UpdateWerkprocesDto } from '@dtos/werkproces.dto'
import { version } from 'os';

export class CreateKerntaakDto {

    @IsNotEmpty()
    @IsAscii()
    @IsString()
    @MaxLength(20, {
        message: 'Code is te lang. Voorbeeld: b1-k1'
    })
    public code: string;

    @IsIn(["basisdeel", "profieldeel", ""], {
        message: 'Waarde mag alleen basisdeel, profieldeel of leeg zijn.'
    })
    public part: string;
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(100, {
        message: 'Naam opleiding is te lang. Maximaal 100 karakters.'
    })
    public name: string;
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(30, {
        message: 'Informele naam opleiding is te lang. Maximaal 30 karakters.'
    })
    public informalName: string;
    
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van de kerntaak is te lang. Maximaal 1024 karakters.'
    })
    public description: string;
    
    @ValidateNested()
    public werkprocessen: CreateWerkprocesDto[];
}

export class UpdateKerntaakDto {
    @IsOptional()
    @IsAscii()
    public id: string;
    
    @IsOptional()
    @IsAscii()
    @IsString()
    @MaxLength(20, {
        message: 'Code is te lang. Voorbeeld: b1-k1'
    })
    public code: string;

    @IsOptional()
    @IsIn(["basisdeel", "profieldeel", ""], {
        message: 'Waarde mag alleen basisdeel, profieldeel of leeg zijn.'
    })
    public part: string;
    
    @IsOptional()
    @IsString()
    @MaxLength(100, {
        message: 'Naam opleiding is te lang. Maximaal 100 karakters.'
    })
    public name: string;
    
    @IsOptional()
    @IsString()
    @MaxLength(30, {
        message: 'Informele naam opleiding is te lang. Maximaal 30 karakters.'
    })
    public informalName: string;

    @IsOptional()
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van de kerntaak is te lang. Maximaal 1024 karakters.'
    })
    public description: string;
    
    @IsOptional()
    @ValidateNested()
    public werkprocessen: UpdateWerkprocesDto[];
}

