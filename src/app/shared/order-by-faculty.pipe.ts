import { Pipe, PipeTransform } from '@angular/core';

const orderByList = ['moderator', 'facilitator', 'chairs'];
const secondary = ['discussant', 'panelist', 'case reviewer', 'commentator'];
@Pipe({ name: 'orderByFaculty' })
export class OrderByFacultyPipe implements PipeTransform {
  transform(typeList: any[]) {
    if (typeList) {
      return typeList.sort((a: any, b: any) => {
        const temp = (<string>a.key).toLowerCase();
        if (orderByList.includes(temp)) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      return [];
    }
  }
}
