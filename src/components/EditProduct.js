const handleChange = (e) => {
  const { name, value } = e.target;

  // If the field is numeric, parse it and prevent invalid values.
  if (["qty", "h", "w", "price"].includes(name)) {
    const parsedValue = name === "qty" ? parseInt(value, 10) : parseFloat(value);

    if (parsedValue <= 0 || isNaN(parsedValue)) {
      return;
    }

    if (["h", "w"].includes(name)) {
      setProduct({
        ...product,
        size: {
          ...product.size,
          [name]: parsedValue,
        },
      });
    } else {
      setProduct({
        ...product,
        [name]: parsedValue,
      });
    }
  } else {
    // Directly set the value for non-numeric fields.
    if (name === 'uom') {
      setProduct({
        ...product,
        size: {
          ...product.size,
          uom: value,
        },
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  }
};
