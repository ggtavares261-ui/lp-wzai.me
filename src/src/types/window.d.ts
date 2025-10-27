
interface Window {
  handleLeadSubmit?: (payload: {
    name: string;
    email: string;
    phone: string;
    specialty: string;
    specialty_other?: string;
  }) => Promise<void>;
  __cursorHalo?: {
    enable(): void;
    disable(): void;
    destroy(): void;
  };
  dataLayer?: Array<Record<string, any>>;
}
