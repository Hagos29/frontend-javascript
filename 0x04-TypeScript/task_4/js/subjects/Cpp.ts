

namespace Subjects {
  // Declaration merging: add experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Cpp class extends Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (
        this['teacher'] &&
        this['teacher'].experienceTeachingC !== undefined &&
        this['teacher'].experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this['teacher'].firstName}`;
      }
      return 'No available teacher';
    }
  }
}
