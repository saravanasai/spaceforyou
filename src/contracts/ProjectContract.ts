export interface AppTypeInterface {
  id: number;
  name: string;
  description: string;
}

export interface ProjectDataInterface {
  id: number;
  name: string;
  description: string;
  application_key: string;
  created_at: string;
  app_info: AppTypeInterface;
}
