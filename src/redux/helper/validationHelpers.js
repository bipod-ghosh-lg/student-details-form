export const validateStep = (state, step) => {
  console.log(state, step);

  const errors = {};
  const {
    firstName,
    lastName,
    email,
    phone,
    whatsapp,
    dob,
    gender,
    country,
    state: addressState,
    citie,
    zipcode,
    streetAddress,
    shippingCountry,
    shippingState,
    shippingCitie,
    shippingZipcode,
    shippingStreetAddress,
    currentRole,
    institution,
    degree,
    fieldOfStudy,
    graduationYear,
    educationCountry,
    educationState,
    educationCitie,
    workingCompany,
    workingCountry,
    workingState,
    workingCitie,
    workingIndustry,
    workingRole,
  } = state;

  if (step === 1) {
    if (!firstName) errors.firstName = "Please fill in the First Name.";
    if (!lastName) errors.lastName = "Please fill in the Last Name.";
    if (!email) errors.email = "Please fill in the Email Address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Please enter a valid email address.";
    if (!phone) errors.phone = "Please fill in the Phone Number.";
    if (!whatsapp) errors.whatsapp = "Please fill in the WhatsApp Number.";
    if (!dob) errors.dob = "Please fill in the Date of Birth.";
    if (!gender) errors.gender = "Please select a Gender.";
  } else if (step === 2) {
    if (!country) errors.country = "Please fill in the Country.";
    if (!addressState) errors.state = "Please fill in the State.";
    if (!citie) errors.citie = "Please fill in the City.";
    if (!zipcode) errors.zipcode = "Please fill in the Zipcode.";
    if (!streetAddress)
      errors.streetAddress = "Please fill in the Street Address.";
  } else if (step === 3) {
    if (!shippingCountry)
      errors.shippingCountry = "Please fill in the Shipping Country.";
    if (!shippingState)
      errors.shippingState = "Please fill in the Shipping State.";
    if (!shippingCitie)
      errors.shippingCitie = "Please fill in the Shipping City.";
    if (!shippingZipcode)
      errors.shippingZipcode = "Please fill in the Shipping Zipcode.";
    if (!shippingStreetAddress)
      errors.shippingStreetAddress =
        "Please fill in the Shipping Street Address.";
  } else if (step === 5) {
    if (!currentRole) errors.currentRole = "Please fill in the Current Role.";
  } else if (step === 6) {
    if (!institution) errors.institution = "Please fill in the Institution.";
    if (!degree) errors.degree = "Please fill in the Degree.";
    if (!fieldOfStudy)
      errors.fieldOfStudy = "Please fill in the Field of Study.";
    if (!graduationYear)
      errors.graduationYear = "Please fill in the Graduation Year.";
    if (!educationCountry)
      errors.educationCountry = "Please fill in the Education Country.";
    if (!educationState)
      errors.educationState = "Please fill in the Education State.";
    if (!educationCitie)
      errors.educationCitie = "Please fill in the Education City.";
  } else if (step === 7) {
    if (!workingCompany)
      errors.workingCompany = "Please fill in the Working Company.";
    if (!workingCountry)
      errors.workingCountry = "Please fill in the Working Country.";
    if (!workingState)
      errors.workingState = "Please fill in the Working State.";
    if (!workingCitie) errors.workingCitie = "Please fill in the Working City.";
    if (!workingIndustry)
      errors.workingIndustry = "Please fill in the Working Industry.";
    if (!workingRole) errors.workingRole = "Please fill in the Working Role.";
  }

  return errors;
};
