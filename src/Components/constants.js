const generateId = () =>
    `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

export { generateId };