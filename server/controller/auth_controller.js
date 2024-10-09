const home = async (req, res) => {
  try {
    res.status(200).send(`Welcome`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { home, register };
