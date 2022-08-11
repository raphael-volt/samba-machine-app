import {Injectable} from '@angular/core';

export type CLAVES = 'son' | 'samba' | 'rumba'
const claves: { name: CLAVES, notes: string[] }[] = [
  {
    name: 'son', notes: [
      '0:0:0',
      '0:0:3',
      '0:1:2',
      '0:2:2',
      '0:3:0'
    ]
  },
  {
    name: 'samba', notes: [
      '0:0:0',
      '0:0:3',
      '0:1:2',
      '0:2:2',
      '0:3:1'
    ]
  },
  {
    name: 'rumba', notes: [
      '0:0:0',
      '0:0:3',
      '0:1:3',
      '0:2:2',
      '0:3:0'
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class ClavesService {

  constructor() {
  }
}
