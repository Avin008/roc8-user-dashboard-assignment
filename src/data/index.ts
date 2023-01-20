export const projectStatus: {
  id: number;
  status: number;
  name: string;
}[] = [
  { id: 1, status: 5, name: "Total Projects" },
  { id: 2, status: 1, name: "Completed" },
  { id: 3, status: 3, name: "Ongoing" },
  { id: 4, status: 1, name: "Delayed" },
  { id: 5, status: 5, name: "Employees" },
];

export const teamMembers: {
  id: number;
  img: string;
  name: string;
  degisnation: string;
  mood: number;
}[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1629709200392-f3051760e529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    name: "Andrea",
    degisnation: "UX Junior",
    mood: 30,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Alvaro",
    degisnation: "Backend developer",
    mood: 100,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Juan",
    degisnation: "UX Senior",
    mood: 80,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Jose",
    degisnation: "Marketing",
    mood: 10,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Maria",
    degisnation: "UX Junior",
    mood: 50,
  },
];

export const appData: {
  id: number;
  name: string;
  madeBy: string;
  totalBudget: string;
  profitiblity: string;
  actualHours: string;
  hourStatus: string;
}[] = [
  {
    id: 1,
    name: "Insurance App",
    madeBy: "Verti",
    totalBudget: "70.000",
    profitiblity: "-2.500",
    actualHours: "1.100",
    hourStatus: "100 Hours Over Budget!",
  },
  {
    id: 2,
    name: "Neo",
    madeBy: "Bankia",
    totalBudget: "70.000",
    profitiblity: "4.000",
    actualHours: "1.100",
    hourStatus: "1000 sold hours",
  },
  {
    id: 3,
    name: "VR Website",
    madeBy: "Barca",
    totalBudget: "70.000",
    profitiblity: "4.000",
    actualHours: "1.100",
    hourStatus: "1000 sold hours",
  },
  {
    id: 4,
    name: "VR Website",
    madeBy: "Barca",
    totalBudget: "70.000",
    profitiblity: "4.000",
    actualHours: "1.100",
    hourStatus: "1100 sold hours",
  },
];
