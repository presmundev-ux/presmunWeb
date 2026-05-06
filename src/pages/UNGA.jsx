import CouncilTemplate from "./CouncilTemplate.jsx"; 

export default function UNGA() {
  const ungaDescription = (
    <>
      Topic: Reviewing Global Contradictions in Death Penalty Practices and International Human Rights Standards
      <br /><br />
      
Despite a global trend toward abolition, the death penalty remains a deeply contested issue. While over 150 states have abolished it in law or practice, a smaller group continues to carry out executions, with recent increases driven by a handful of countries where transparency is limited. This disparity highlights ongoing tensions between international human rights norms and state sovereignty.

    </>
  );

  return (
    <CouncilTemplate 
      councilName="United Nations General Assembly" 
      subtitle="Third Committee (Social, Humanitarian, and Cultural Committee)
"
      description={ungaDescription} 
    />
  );
}