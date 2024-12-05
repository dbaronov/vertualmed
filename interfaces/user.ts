export interface Patient {
    profile: {
        id: string
        regDate: string
        enabled: boolean

        personal: {
            name: string
            surname: string
            age: number
            sex: string
            dob: string
            maritalStatus: string
            occupation: string

            address: {
                door: string
                street: string
                city: string
                state: string
                country: string
                zip: string
                email: string
                phone: string
            }
        }


        clinical: {
            weight: number
            height: number
            bloodGroup: string
            allergies: string[]
            medicalHistory: string[]
            medications: string[]
            surgeries: string[]
            familyHistory: string[]
            assignedDoctor: string

            appointments: {
                scheduled: {
                    appointment: {
                        id: string
                        date: string
                        doctor: string
                        reason: string
                        isPaidFor: boolean
                    }
                }
                past: {
                    appointment: {
                        id: string
                        date: string
                        doctor: string
                        reason: string
                        outcome: string
                        isPaidFor: boolean
                    }
                }
            }
            
            testResults: {
                test: {
                    id: string
                    date: string
                    type: string
                    result: string
                    laboratory: string
                    doctor: string
                }
            }
        }
    }
}
