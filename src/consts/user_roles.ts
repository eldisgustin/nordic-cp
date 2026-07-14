export enum UserRole {
  Anyone = -2,
  Anonymous = -1,
  Normal = 0,
  Support = 1,
  GM = 2,
  Admin = 3,
}

export type UserRoles = keyof typeof UserRole;
