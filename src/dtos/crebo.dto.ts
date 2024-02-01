import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsUUID, isURL, IsUrl, IsAscii, IsAlphanumeric, IsIn, ValidateNested, isNumberString, IsNumberString } from 'class-validator';
import { CreateKerntaakDto, UpdateKerntaakDto } from '@dtos/kerntaak.dto'
import { version } from 'os';

export class CreateCreboDto {
    @IsNotEmpty()
    @IsAscii()
    @IsUUID(4)
    public id: string;

    @IsNotEmpty()
    @IsNumberString({
        message: 'Crebonummer is een getal. Example 25606.'
    })
    public creboNumber: string;

    @IsIn(['1', '2', '3', '4', ''], {
        message: 'Het niveau van een opleiding wordt aangeduidt met 1, 2, 3 of 4. Of leeg laten.'
    })
    public level: string;
   
    @IsNotEmpty()
    @IsAlphanumeric()
    @IsString()
    @MaxLength(100, {
        message: 'Naam opleiding is te lang. Maximaal 100 karakters.'
    })
    public name: string;
        
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van de kerntaak is te lang. Maximaal 1024 karakters.'
    })
    public description: string;

    @IsString()
    @IsUrl({
        message: 'Alleen een link is toegestaan. Geef een link naar de officiele pagina van deze opleiding op de SBB-website.'
    })
    public sbblink: string;

    @IsString()
    @IsUrl({
        message: 'Alleen een link is toegestaan. Geef een link naar het officiele pdf document van deze opleiding op de SBB-website.'
    })
    public kdpdflink: string;

    @IsNumberString({
        message: 'Het dossiernummer is een getal. Voorbeeld 23244.'
    })
    public fileCode: string;

    @ValidateNested()
    public kerntaken: CreateKerntaakDto[];
}

export class UpdateCreboDto {
    @IsNotEmpty()
    @IsAscii()
    @IsUUID(4)
    public id: string;

    @IsNumberString({
        message: 'Crebonummer is een getal. Example 25606.'
    })
    public creboNumber: string;

    @IsIn(['1', '2', '3', '4', ''], {
        message: 'Het niveau van een opleiding wordt aangeduidt met 1, 2, 3 of 4. Of leeg laten.'
    })
    public level: string;
   
    @IsAlphanumeric()
    @IsString()
    @MaxLength(100, {
        message: 'Naam opleiding is te lang. Maximaal 100 karakters.'
    })
    public name: string;
        
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van de kerntaak is te lang. Maximaal 1024 karakters.'
    })
    public description: string;

    @IsString()
    @IsUrl({
        message: 'Alleen een link is toegestaan. Geef een link naar de officiele pagina van deze opleiding op de SBB-website.'
    })
    public sbblink: string;

    @IsString()
    @IsUrl({
        message: 'Alleen een link is toegestaan. Geef een link naar het officiele pdf document van deze opleiding op de SBB-website.'
    })
    public kdpdflink: string;

    @IsNumberString({
        message: 'Het dossiernummer is een getal. Voorbeeld 23244.'
    })
    public fileCode: string;

    @ValidateNested()
    public kerntaken: UpdateKerntaakDto[];
}