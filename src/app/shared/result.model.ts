export interface Session {
  youtube: string;
  start_time: number;
  subject_list: Subject[];
  group_id: number;
  group_name: string;
  subtitle: string;
  name: string;
  end_time: number;
  is_question: string;
  id: number;
  room: string;
  is_favorite: string;
  evaluation: string;
}

export interface Subject {
  lecture_list: any[];
  name: string;
  id: number;
  faculty_list: any[];
}
