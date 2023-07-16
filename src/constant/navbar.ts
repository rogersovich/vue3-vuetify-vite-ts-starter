import type { TNavbarResponse } from '@/types/NavbarTypes';
import AttendanceIcon from '@/assets/img/navs/nav-attendance.png';
import ApprovalIcon from '@/assets/img/navs/nav-approval.png';
import CalendarIcon from '@/assets/img/navs/nav-calendar.png';
import ClaimIcon from '@/assets/img/navs/nav-claim.png';
import OvertimeIcon from '@/assets/img/navs/nav-overtime.png';
import TripIcon from '@/assets/img/navs/nav-trip.png';

export const NAVBAR_OPTIONS: TNavbarResponse[] = [
  { key: 'overview', title: 'Overview', route: null, children: null },
  {
    key: 'employee-stats',
    title: 'Employee Stats',
    route: null,
    children: null,
  },
  {
    key: 'submission',
    title: 'Submission',
    route: null,
    children: [
      {
        icon: AttendanceIcon,
        title: 'Exc. Attendance',
        desc: 'Report your special absences to get an exception',
      },
      {
        icon: OvertimeIcon,
        title: 'Leave',
        desc: 'Submit your leave request here. Don’t forget to pay attention to the quota',
      },
      {
        icon: CalendarIcon,
        title: 'Overtime Requisition',
        desc: 'Submit your overtime request here. Use your overtime efficiently',
      },
      {
        icon: OvertimeIcon,
        title: 'Overtime',
        desc: 'Report your overtime here. So that your working time is not in vain',
      },
      {
        icon: ClaimIcon,
        title: 'Claim',
        desc: 'Submit your reimbursement here. Complete the submission file',
      },
      {
        icon: TripIcon,
        title: 'Business Trip',
        desc: 'Submit your business trip here. Complete the submission file',
      },
      {
        icon: CalendarIcon,
        title: 'Cash Advance',
        desc: 'Submit your multilevel reimbursement here. Complete the submission file',
      },
      {
        icon: ApprovalIcon,
        title: 'Approval',
        desc: 'Do all the approval process for your team here',
      },
    ],
  },
  { key: 'task', title: 'Task', route: null, children: null },
  { key: 'chat', title: 'Chat', route: null, children: null },
  { key: 'payroll', title: 'Payroll', route: null, children: null },
];
