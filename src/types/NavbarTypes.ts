export type TNavbarResponse = {
  key: string;
  title: string;
  route: null;
  children: TChildNav[] | null;
};

export type TChildNav = {
  icon: string;
  title: string;
  desc: string;
};
