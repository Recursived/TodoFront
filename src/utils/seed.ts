export type Todo = {
	id: number;
	done: boolean;
	createdAt: Date;
	updatedAt: Date;
	title?: string;
	content: string;

};

function seed() {
	return getTodo();
}


function getTodo() : Todo[]{

  return [
    {
      id: 1,
      title: "Do dishes",
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      content: `Do the dishes before the party begins`,
    },
    {
      id: 2,
      title: "Dog house",
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      content: `Should clean the dog house before leaving the house this afternoon`,
    },
    {
      id: 3,
      title: "Trees",
      done: false,
      content: `Should remove tree leaves in the garden`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: "Courses",
      done: false,
      content: `Don't forget the dancing classes this weekend`,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      id: 5,
      title: "Birthday",
      content: `Berenice birthday. Don't forget to buy a memorable gift`,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      title: "Dinner",
      content: `New year dinner. Buy a turkey and defrost`,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];
}

export {
	seed
}

