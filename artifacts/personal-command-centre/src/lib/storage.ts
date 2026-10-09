export type Task = {
  id: string; title: string; description: string; priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'done'; dueDate: string; dueTime: string; createdAt: string;
};
export type Subject = { id: string; name: string; color: string; totalMinutes: number; topicsCompleted: number; topicsTotal: number };
export type StudySession = { id: string; subjectId: string; minutes: number; date: string; note: string };
export type StudyGoal = { id: string; title: string; targetMinutes: number; completedMinutes: number };
export type Habit = { id: string; name: string; icon: string; color: string; frequency: string; completedDates: string[]; createdAt: string };
export type Goal = { id: string; title: string; description: string; category: string; term: 'short' | 'long'; deadline: string; progress: number; status: 'active' | 'completed' };
export type Note = { id: string; title: string; content: string; color: string; updatedAt: string };
export type Profile = { name: string; focus: string; theme: 'dark' | 'light' };
export type FocusTimer = { mode: 'focus' | 'break'; minutesLeft: number; isRunning: boolean };

export type Store = {
  profile: Profile; tasks: Task[]; subjects: Subject[]; studySessions: StudySession[];
  studyGoals: StudyGoal[]; habits: Habit[]; goals: Goal[]; notes: Note[]; focusTimer: FocusTimer;
};

const today = new Date().toISOString().slice(0, 10);
const ago = (days: number) => new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
const uid = (prefix: string) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const starterStore = (): Store => ({
  profile: { name: 'Alex', focus: 'Make space for meaningful work.', theme: 'dark' },
  tasks: [
    { id: 'task-1', title: 'Shape the product brief', description: 'Turn the loose notes into a crisp one-pager.', priority: 'high', status: 'todo', dueDate: today, dueTime: '09:30', createdAt: ago(2) },
    { id: 'task-2', title: 'Review weekly numbers', description: 'Look for the one signal worth carrying forward.', priority: 'medium', status: 'todo', dueDate: today, dueTime: '13:00', createdAt: ago(1) },
    { id: 'task-3', title: 'Reply to Sam', description: 'Close the loop on the launch timing.', priority: 'low', status: 'done', dueDate: today, dueTime: '08:15', createdAt: ago(3) },
    { id: 'task-4', title: 'Walk without headphones', description: 'A reset before the evening block.', priority: 'low', status: 'todo', dueDate: today, dueTime: '17:30', createdAt: ago(1) },
  ],
  subjects: [
    { id: 'subject-1', name: 'Product strategy', color: '#c8ef64', totalMinutes: 420, topicsCompleted: 8, topicsTotal: 12 },
    { id: 'subject-2', name: 'Japanese', color: '#ff896f', totalMinutes: 265, topicsCompleted: 15, topicsTotal: 24 },
    { id: 'subject-3', name: 'Creative coding', color: '#89b4ff', totalMinutes: 180, topicsCompleted: 4, topicsTotal: 10 },
  ],
  studySessions: [
    { id: 'session-1', subjectId: 'subject-1', minutes: 45, date: today, note: 'Positioning patterns' },
    { id: 'session-2', subjectId: 'subject-2', minutes: 25, date: ago(1), note: 'Listening drills' },
  ],
  studyGoals: [{ id: 'study-goal-1', title: 'Deep work this week', targetMinutes: 600, completedMinutes: 420 }],
  habits: [
    { id: 'habit-1', name: 'Morning pages', icon: 'pen', color: '#c8ef64', frequency: 'Daily', completedDates: [today, ago(1), ago(2), ago(3)], createdAt: ago(30) },
    { id: 'habit-2', name: 'Move for 20 minutes', icon: 'move', color: '#ff896f', frequency: 'Daily', completedDates: [today, ago(1), ago(3)], createdAt: ago(18) },
    { id: 'habit-3', name: 'Read before bed', icon: 'book', color: '#89b4ff', frequency: 'Daily', completedDates: [ago(1), ago(2), ago(3), ago(4), ago(5)], createdAt: ago(24) },
  ],
  goals: [
    { id: 'goal-1', title: 'Launch the field guide', description: 'Publish a useful, generous version of the idea.', category: 'Work', term: 'long', deadline: '2026-12-18', progress: 62, status: 'active' },
    { id: 'goal-2', title: 'Build a stronger creative practice', description: 'Make something small every week.', category: 'Personal', term: 'short', deadline: '2026-10-01', progress: 38, status: 'active' },
    { id: 'goal-3', title: 'Complete the winter course', description: 'Finish the last two modules and ship the project.', category: 'Learning', term: 'short', deadline: '2026-02-28', progress: 100, status: 'completed' },
  ],
  notes: [
    { id: 'note-1', title: 'A useful constraint', content: 'When the surface gets noisy, return to the one decision that changes the next hour.', color: '#c8ef64', updatedAt: today },
    { id: 'note-2', title: 'Ideas to test', content: 'A tiny weekly review that starts with what felt easy. Energy is data too.', color: '#89b4ff', updatedAt: ago(2) },
  ],
  focusTimer: { mode: 'focus', minutesLeft: 25, isRunning: false },
});

const KEY = 'personal-command-centre-v1';
export const loadStore = (): Store => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...starterStore(), ...JSON.parse(raw) } : starterStore();
  } catch { return starterStore(); }
};
export const saveStore = (store: Store) => {
  try { localStorage.setItem(KEY, JSON.stringify(store)); } catch { /* storage can be unavailable in private mode */ }
};
export const newId = uid;
export const todayKey = () => new Date().toISOString().slice(0, 10);