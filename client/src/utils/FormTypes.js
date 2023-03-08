export const connectionType = [
  {
    type: "select",
    name: "connection type",
    label: "Type",
    options: [
      { value: "smhi", label: "smhi" },
      { value: "smhi1", label: "smhi1" },
      { value: "elvaco", label: "elvaco" },
      { value: "other", label: "other" },
    ],
  },
];

export const caseSHMI = [
  { type: "text", name: "name", label: "Name*" },
  { type: "textarea", name: "description", label: "Description" },
  { type: "text", name: "site name", label: "Site name*" },
  { type: "text", name: "street name", label: "Street name*" },
  { type: "text", name: "city", label: "City*" },
  {
    type: "select",
    name: "type",
    label: "Type",
    options: [
      { value: "value 1", label: "Value 1" },
      { value: "value 2", label: "Value 2" },
      { value: "value 3", label: "Value 3" },
      { value: "value 4", label: "Value 4" },
    ],
  },
  { type: "number", name: "number of days", label: "Number of days data is retrieved for*" },
];
