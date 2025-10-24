import ProfileForm from "@/components/profile/ProfileForm";
import Title from "@/components/ui/Title";
import { useUser } from "reactfire";

const ProfilePage = () => {
  const { data: user } = useUser();

  if (!user) {
    return <div className="text-red-500">Loading...</div>;
  }

  return (
    <div>
      <Title text={"Profile"} />
      <ProfileForm user={user} />
    </div>
  );
};
export default ProfilePage;
