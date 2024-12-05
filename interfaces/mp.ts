export interface MedicalProfessional {
    profile: {
        id: string
        regDate: string
        enabled: boolean

        personal: {
            name: string
            surname: string
            age: number
        }
    }
}
