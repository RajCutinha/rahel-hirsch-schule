import { z } from 'zod';

export const PersonValidationSchema = z.object({
    firstname: z.string().max(255),
    lastname: z.string().max(255),
    gender: z.enum(['mänlich', 'weiblich', 'diverse']),
    email: z.string().email().max(255),
    birthdate: z.string().date(),
    nationality: z.string().max(100),
    countryofBirth: z.string().max(255),
    birthplace: z.string().max(255),
    phoneNumber: z.string().max(255),
    telephone: z.string().max(255),
    pictureOk: z.boolean(),
    originLanguage: z.string().max(255),
    residenceStatus: z.string().max(255),
});

export const AddressValidationSchema = z.object({
    postcode: z.number().min(0).max(99999),
    place: z.string().max(255),
    street: z.string().max(255),
    streetNumber: z.string().max(20),
    doorbellName: z.string().max(255),
    landlord: z.string().max(255),
});

export const GuardianValidationSchema = z.object({
    firstname: z.string().max(255),
    lastname: z.string().max(255),
    telephone: z.string().max(255),
});

export const RegistrationValidationSchema = z.object({
  specialty: z.enum(['ZFA', 'MFA']),
  entryDate: z.string().date().max(255),
  contractNumber: z.string().max(255),
  motherLanguage: z.string().max(255),
  reEducation: z.boolean(),
  isFromBrandenburg: z.boolean(),
  webSave: z.boolean(),
  educationPermit: z.boolean(),
});

export const EmployerValidationSchema = z.object({
    employerName: z.string().max(255),
    employerStreet: z.string().max(255),
    employerStreetnumber: z.string().max(20),
    employerTel: z.string().max(255),
    contactPerson: z.string().max(255),
    employerFax: z.string().max(20),
    employerEmail: z.string().email().max(255)
});

export const GraduationValidationSchema = z.object({
    bbr: z.boolean(),
    ebbr: z.boolean(),
    msa: z.boolean(),
    abitur: z.boolean(),
    fachabitur: z.boolean(),
    fachabiturSchriftlTeil: z.boolean(),
    noGraduation: z.boolean()
});
