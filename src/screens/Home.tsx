import { Box } from "@chakra-ui/react";
import FormBuilder from "../components/IdeaForm";
import { PreHomeScreenProps } from "../routes/NavigationProps";

const Home: React.FC<PreHomeScreenProps> = ({ navigation }) => {
  return (
    <Box maxWidth={500} margin={"auto"}>
      <FormBuilder />
    </Box>
  );
};

export default Home;
