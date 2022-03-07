export type NSProps = {
  id: number;
  fullName: string;
  jobTitle:
    | 'Software Engineer'
    | 'Technical Project Manager'
    | 'QA Engineer'
    | 'Team Lead'
    | 'UI/UX Designer'
    | 'Chief Technology Officer'
    | 'Lead Tech Recruiter and Marketing Manager'
    | 'VP of Engineering'
    | 'Managing Director';
  avatarUrl: string;
  team:
    | 'Project Managers'
    | 'Jolt'
    | 'Shadowboxer'
    | 'Noble'
    | "Children's Miracle Network Hospitals"
    | 'Small & Simple'
    | 'Namedrop'
    | 'Struck'
    | 'CICERO'
    | 'Scalar'
    | 'VERSA'
    | 'Union.co'
    | 'iFIT'
    | 'Nicasource'
    | 'Leadership'
    | 'WWB';
  country: 'Argentina' | 'Nicaragua' | 'Mexico' | 'Brasil' | 'United States';
};
