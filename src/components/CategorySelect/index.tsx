import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles";

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasChecked?: boolean;
};
export function CategorySelect({
  categorySelected,
  setCategory,
  hasChecked = false,
}: CategorySelectProps) {
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
      horizontal
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => {
            setCategory(category.id);
          }}
          hasCheckbox={hasChecked}
        />
      ))}
    </ScrollView>
  );
}
