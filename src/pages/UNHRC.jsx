import CouncilTemplate from "./CouncilTemplate.jsx"; 

export default function UNHRC() {
  const ungaDescription = (
    <>
      Topic: Myanmar Under Review: Human Rights Challenges in Conflict, Governance, and Civil Liberties

      <br /><br />
      
Since 2021, Myanmar has faced a severe and ongoing crisis marked by armed conflict, political instability, and widespread human rights violations. Restrictions on freedom of expression, limited access to information, and the breakdown of essential services have contributed to large-scale displacement and humanitarian need.
    </>
  );

  return (
    <CouncilTemplate 
      councilName="United Nations Human Rights Council" 
      subtitle="Universal Periodic Review (UPR)
"
      description={ungaDescription} 
    />
  );
}