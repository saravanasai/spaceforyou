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

export interface ProjectRequestDataInterface {
  name: string;
  app_type_id: number;
  description: string;
  
}
