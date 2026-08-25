// Types
export type StudentStatus = 'active' | 'inactive';

export const STUDENT_STATUS_LABELS = {
  active: 'Active',
  inactive: 'Inactive',
} as const satisfies Record<StudentStatus, string>;

export type StudentStatusLabel = (typeof STUDENT_STATUS_LABELS)[StudentStatus];

export interface Student {
  id: number;
  name: string;
  email: string;
  status: StudentStatus;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// Status Conversion Functions
/**
 * Converts a strictly-typed StudentStatus into a human-readable label.
 * Enforces compile-time exhaustiveness.
 */
export function getStudentStatusLabel(
  status: StudentStatus,
): StudentStatusLabel {
  return STUDENT_STATUS_LABELS[status];
}

/**
 * Safely converts an unknown status value into a readable label,
 * defensively handling runtime edge cases without using `any`.
 */
export function formatStudentStatusSafe(
  rawStatus: unknown,
  fallback = 'Unknown Status',
): string {
  if (rawStatus === null || rawStatus === undefined) {
    return fallback;
  }

  // Handle boolean values (e.g. isActive: true / false)
  if (typeof rawStatus === 'boolean') {
    return rawStatus
      ? STUDENT_STATUS_LABELS.active
      : STUDENT_STATUS_LABELS.inactive;
  }

  // Handle string values (case-insensitive and trimmed)
  if (typeof rawStatus === 'string') {
    const normalized = rawStatus.trim().toLowerCase();
    if (normalized === 'active' || normalized === 'inactive') {
      return STUDENT_STATUS_LABELS[normalized];
    }
  }

  return fallback;
}

// Functions
export function formatStudent(student: Student): string {
  const statusLabel = getStudentStatusLabel(student.status);
  return `${student.id} - ${student.name} (${statusLabel})`;
}

export function isStudent(data: unknown): data is Student {
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

// Printing/Logs
console.log('--- Formatted Students (Strict Conversion) ---');
console.log(formatStudent(sampleStudent));
console.log(formatStudent(sampleStudent2));

console.log('\n--- API Responses ---');
console.log('Single Student Response: ', singleStudentResponse);
console.log('Student List Response: ', studentListResponse);

console.log('\n--- Type Guard Validation ---');
console.log('Valid data is Student: ', isStudent(validData)); // true
console.log('Invalid ID is Student: ', isStudent(invalidIdData)); // false
console.log('Missing Name is Student: ', isStudent(missingNameData)); // false

console.log('\n--- Edge Case Handling (formatStudentStatusSafe) ---');
console.log("Strict 'active':", formatStudentStatusSafe('active'));
console.log("Strict 'inactive':", formatStudentStatusSafe('inactive'));
console.log("Uppercase 'ACTIVE':", formatStudentStatusSafe('ACTIVE'));
console.log(
  "Mixed case & whitespace '  Inactive  ':",
  formatStudentStatusSafe('  Inactive  '),
);
console.log('Boolean true:', formatStudentStatusSafe(true));
console.log('Boolean false:', formatStudentStatusSafe(false));
console.log('Null status:', formatStudentStatusSafe(null));
console.log('Undefined status:', formatStudentStatusSafe(undefined));
console.log('Invalid number status (1):', formatStudentStatusSafe(1));
console.log(
  "Invalid string status ('suspended'):",
  formatStudentStatusSafe('suspended'),
);
