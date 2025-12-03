"use client"
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode, useState } from 'react';
import styles from "@/app/components/styles/Dialog.module.css";

interface AppDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  open:boolean;
  setOpen:any;
}

const DialogModal = ({
  trigger,
  title,
  description,
  children,
  open = false,
  setOpen
}: AppDialogProps) => { 
	return (
	<Dialog.Root open={open} onOpenChange={setOpen}>
		<Dialog.Trigger asChild>
			{trigger}
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className={styles.Overlay} />
			<Dialog.Content className={`${styles.Content}`}>
				{title && (<Dialog.Title className={styles.Title}>
					{title}
				</Dialog.Title>)}
				{description && (<Dialog.Description className={styles.Description}>
					{description}
				</Dialog.Description>)}
				{children}
				<Dialog.Close asChild>
					<button
						className={styles.IconButton}
						aria-label="Close"
					>
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
)};

export default DialogModal;
