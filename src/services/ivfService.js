const calculateIVFSuccessRate = ({
    selectedAgeRange,
    undergoneProcedures,
    medicalConditions,
    numCycles,
  }) => {
    // Success rate base values based on age range (in %)
    const ageSuccessRates = {
      under30: 50,
      between3034: 40,
      between3537: 30,
      between3840: 20,
      between4143: 10,
      above43: 5,
    };
  
    // Adjustments based on medical conditions
    const conditionModifiers = {
      PCOS: -5,
      Endometriosis: -10,
      LowOvarianReserve: -15,
      MaleFactorInfertility: -10,
    };
  
    // Adjustments based on procedures
    const procedureModifiers = {
      ICSI: 5, // Positive impact of ICSI
      PGT: 10, // Positive impact of PGT
    };
  
    // Base success rate from age
    let successRate = ageSuccessRates[selectedAgeRange] || 0;
  
    // Apply adjustments for medical conditions
    medicalConditions.forEach((condition) => {
      successRate += conditionModifiers[condition] || 0;
    });
  
    // Apply adjustments for previous procedures
    if (undergoneProcedures.ICSI === "yes") {
      successRate += procedureModifiers.ICSI;
    }
    if (undergoneProcedures.PGT === "yes") {
      successRate += procedureModifiers.PGT;
    }
  
    // Adjustments based on the number of cycles (slight increase per cycle)
    successRate += numCycles * 2;
  
    // Ensure the success rate is within reasonable bounds
    successRate = Math.max(0, Math.min(successRate, 100));
  
    return successRate.toFixed(2); // Return as a percentage string
  };
  
  export default calculateIVFSuccessRate;
  