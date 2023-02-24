import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SEO() {
  const { pathname } = useLocation();

  let title = "Heritage-Handler-App | Manage your money";
  let description = "Heritage-Handler-App is an app which allows you to calculate your heritage through incomes and remittances.";
  let keywords = "handle your heritage, manage remittances and incomes, calculate remittances and incomes";

  switch (pathname) {
    case "/":
      title = `Login | ${title}`;
      description = `${description} | Log into your account or register with a new one!`;
      keywords = "login into your account, create new account, set your heritage, handle your money";
      break;
    case "/home":
      title = `Home | ${title}`;
      description = `${description} | Check your statistics such as current heritage, incomes and remittances!`;
      keywords = "check your heritage, analyze your remittances and incomes, observe your rates and indexes";
      break;
    case "/account":
      title = `Account | ${title}`;
      description = `${description} | Inspect your personal information or change it and link either accounts which have already been created or newly-created ones!`;
      keywords = "link accounts, change password and email, delete your account, get link requests";
      break;
    case "/search":
      title = `Search | ${title}`;
      description = `${description} | Create, modify or delete both incomes and remittances. Also, search for them!`;
      keywords = "handle incomes, handle remittances and incomes, search remittances";
      break;
    default:
      break;
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}
