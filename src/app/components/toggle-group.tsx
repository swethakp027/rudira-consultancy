
"use client"
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../context/ThemeContext";
import styles from "@/app/components/styles/ToggleGroups.module.css";

export default function ToggleGroups() {
    const {theme, toggleTheme} = useTheme()
	return (<ToggleGroup.Root
		className={styles.Group}
		type="single"
		aria-label="Text alignment"
        value={theme}
		onValueChange={toggleTheme}
	>
		<ToggleGroup.Item
			className={styles.Item}
			value="light"
			aria-label="light theme"
		>
			<SunIcon />
		</ToggleGroup.Item>
		<ToggleGroup.Item
			className={styles.Item}
			value="dark"
			aria-label="dark theme"
		>
			<MoonIcon />
		</ToggleGroup.Item>
	</ToggleGroup.Root>
)};


