export type NSProps = {
  id: number;
  fullName: string;
  jobTitle:
    | 'Software Engineer'
    | 'Technical Project Manager'
    | 'QA Engineer'
    | 'Team Lead'
    | 'Team Manager'
    | 'UI/UX Designer'
    | 'Chief Technology Officer'
    | 'Lead Tech Recruiter and Marketing Manager'
    | 'VP of Engineering'
    | 'Managing Director'
    | 'Recruitment and Marketing Assistant'
    | 'Salesforce Administrator'
    | 'Coworking Manager';
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
    | 'WWB'
    | 'Upstament'
    | 'iHeart Media'
    | 'IVL Collective';
  country:
    | 'Argentina'
    | 'Nicaragua'
    | 'Mexico'
    | 'Brasil'
    | 'United States'
    | 'Dominican Republic';
  departament: 'Engineering' | 'Design' | 'Project Managers' | 'Administration';
};
