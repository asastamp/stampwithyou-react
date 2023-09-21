interface Resume {
  name: string;
  description: string;
  contacts: {
    path: string;
    name: string;
    link: string;
  }[];
  skills: {
    topic: string;
    skill: {
      path: string;
      name: string;
    }[];
  }[];
  mainSection: {
    sectionName: string;
    details: {
      name: string;
      subheader: string;
      dateTime?: string;
      link?: string;
      descriptions: {
        selector: string;
        label: string;
      }[];
    }[];
  }[];
}
