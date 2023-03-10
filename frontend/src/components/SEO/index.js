import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SEO() {
  const { pathname } = useLocation();

  let title = "Heritage-Handler-App | Manage your money";
  let description = "Heritage-Handler-App is an app which allows you to calculate your heritage through incomes and remittances";
  let keywords = "handle your heritage, manage remittances and incomes, calculate remittances and incomes";
  let canonical = "https://heritage-handler-app.vercel.app";

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
      canonical = `${canonical}/home`;
      break;
    case "/account":
      title = `Account | ${title}`;
      description = `${description} | Inspect your personal information or change it and link either accounts which have already been created or newly-created ones!`;
      keywords = "link accounts, change password and email, delete your account, get link requests";
      canonical = `${canonical}/account`;
      break;
    case "/search":
      title = `Search | ${title}`;
      description = `${description} | Create, modify or delete both incomes and remittances. Also, search for them!`;
      keywords = "handle incomes, handle remittances and incomes, search remittances";
      canonical = `${canonical}/search`;
      break;
    default:
      title = `Error | ${title}`;
      description = `${description} | Error: page doesn't exist...`;
      keywords = "error, unavailable, doesn't exist, heritage-handler-app";
      canonical = `${canonical}/${pathname}`;
      break;
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="canonical" content={canonical} />
    </Helmet>
  );
}
