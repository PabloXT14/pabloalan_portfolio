export interface IWorkExperience {
  name: string;
  company: string;
  description: string;
}

export interface IExperience {
  yeat: string;
  works: IWorkExperience[];
}