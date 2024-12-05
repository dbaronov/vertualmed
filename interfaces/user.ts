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
        }
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
        clinical: {
            bloodGroup: string
            weight: number
            height: number
            allergies: string[]
            medicalHistory: string[]
            medications: string[]
            surgeries: string[]
            familyHistory: string[]

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
                    doctor: string
                }
            }
        }
    }
}
