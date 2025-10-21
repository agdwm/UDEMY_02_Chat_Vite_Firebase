import ProfileForm from "@/components/profile/ProfileForm";
import { useUser } from "reactfire";

const ProfilePage = () => {
  const { data: user } = useUser();

  if (!user) {
    return <div className="text-red-500">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-medium mb-6">Profile</h1>
      <ProfileForm user={user} />
    </div>
  );
};
export default ProfilePage;
