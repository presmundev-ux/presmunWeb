// Use ./ since they are in the same 'pages' folder!
import CouncilTemplate from "./CouncilTemplate.jsx"; 

export default function UNGA() {
  const ungaDescription = (
    <>
      The International Press Corps provides a dynamic platform to engage with the conference from a journalistic perspective. Through articles, interviews, and media coverage, members of the press will report on committee proceedings, analyze delegate performance, and shape public narratives.
    </>
  );

  return (
    <CouncilTemplate 
      councilName="International Press Corps (IPC)" 
      subtitle=""
      description={ungaDescription} 
    />
  );
}