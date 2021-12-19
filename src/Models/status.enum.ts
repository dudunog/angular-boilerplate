export enum Status {
  "Active" = "Active",
  "Inactive" = "Inactive"
}

export function transformStringInEnum(status: string): Status {
  switch(status) {
    case "Active":
      return Status.Active;
    case "Inactive":
      return Status.Inactive;
    default:
      break;
  }
}
