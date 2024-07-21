
  
  const generateDummyData = () => {
    const dummyData = [];
  
    for (let i = 1; i <= 5; i++) {
      dummyData.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        subject: `Subject ${i}`,
        phone: `123-456-789${i}`,
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus interdum ligula, at rutrum magna laoreet et. Integer nec leo vitae odio ultricies feugiat. Sed consequat purus et ipsum sodales, sit amet vehicula elit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
        date: new Date().toISOString(),
      });
    }
  
    return dummyData;
  };
  
  const dummyMessages = generateDummyData();
  console.log(dummyMessages);
  