exports.contarEmails = (req, res) => {
    const totalEmails = cadastros.length;
    res.json({ totalEmails });
  };