export interface IWorkExperience {
  name: string
  company: string
  description: string
}

export interface IExperience {
  year: string
  works: IWorkExperience[]
}
