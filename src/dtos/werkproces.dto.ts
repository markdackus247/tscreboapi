import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsUUID, isURL, IsUrl, IsAscii, IsAlphanumeric, IsOptional } from 'class-validator';
import { version } from 'os';

export class CreateWerkprocesDto {
    // @IsAscii()
    // @IsUUID(4)
    public id: string;
    
    @IsNotEmpty()
    @IsAscii()
    @IsString()
    @MaxLength(20, {
        message: 'Code is te lang. Voorbeeld: b1-k1-w1'
    })
    public code: string;
    
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
        message: 'Omschrijving van het werkproces is te lang. Maximaal 1024 karakters.'
    })
    public description: string;
    
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van de resultaten zijn te lang. Maximaal 1024 karakters.'
    })
    public outcome: string;
    
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van het gedrag is te lang. Maximaal 1024 karakters.'
    })
    public behaviour: string;
}

export class UpdateWerkprocesDto {
    // @IsAscii()
    // @IsUUID(4)
    @IsOptional()
    public id: string;
    
    @IsOptional()
    @IsAscii()
    @IsString()
    @MaxLength(20, {
        message: 'Code is te lang. Voorbeeld: b1-k1-w1'
    })
    public code: string;
    
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
        message: 'Omschrijving van de opleiding is te lang. Maximaal 1024 karakters.'
    })
    public description: string;
    
    @IsOptional()
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van de resultaten is te lang. Maximaal 1024 karakters.'
    })
    public outcome: string;
    
    @IsOptional()
    @IsString()
    @IsAscii()
    @MaxLength(1024, {
        message: 'Omschrijving van het gedrag is te lang. Maximaal 1024 karakters.'
    })
    public behaviour: string;
}