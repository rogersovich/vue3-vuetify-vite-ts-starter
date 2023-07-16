export type TNavbarResponse = {
  key: string;
  title: string;
  route: string | null;
  children: TChildNav[] | null;
};

export type TChildNav = {
  icon: string;
  title: string;
  desc: string;
};
