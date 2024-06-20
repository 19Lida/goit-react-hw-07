import css from "./Icon.module.css";

const Icon = ({ icon, size, alt }) => {
  return (
    <div className={css.iconBlock}>
      <img src={icon} height={size} width={size} alt={alt} />
    </div>
  );
};

export default Icon;
