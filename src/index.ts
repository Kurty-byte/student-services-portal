// Types
interface Student {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// Functions
function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

function isStudent(data: unknown): data is Student {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const candidate = data as Record<string, unknown>;

  return (
    typeof candidate.id === 'number' &&
    typeof candidate.name === 'string' &&
    typeof candidate.email === 'string' &&
    (candidate.status === 'active' || candidate.status === 'inactive')
  );
}

// Samples
const sampleStudent: Student = {
  id: 101,
  name: 'Kurt Velasco',
  email: 'kv@gmail.com',
  status: 'active',
};

const sampleStudent2: Student = {
  id: 102,
  name: 'Michaela Endino',
  email: 'me@gmail.com',
  status: 'inactive',
};

const singleStudentResponse: ApiResponse<Student> = {
  success: true,
  data: sampleStudent,
};

const studentListResponse: ApiResponse<Student[]> = {
  success: true,
  data: [sampleStudent, sampleStudent2],
};

const validData: unknown = {
  id: 103,
  name: 'Ronald Dalajota',
  email: 'rd@gmail.com',
  status: 'active',
};

const invalidIdData: unknown = {
  id: '104',
  name: 'Gregg Sarausa',
  email: 'gs@gmail.com',
  status: 'inactive',
};

const missingNameData: unknown = {
  id: 105,
  email: 'ic@gmail.com',
  status: 'active',
};

// Printing
console.log(formatStudent(sampleStudent));

console.log('Single Student Response: ', singleStudentResponse);
console.log('Student List Response: ', studentListResponse);

console.log('Valid data is Student: ', isStudent(validData)); // true
console.log('Ivalid ID is Student: ', isStudent(invalidIdData)); // false
console.log('Missing Name is Student: ', isStudent(missingNameData)); // false
