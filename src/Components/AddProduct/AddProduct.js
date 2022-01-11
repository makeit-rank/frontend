import React, { useRef } from "react";

import styles from "./AddProduct.module.css";

import { ADD_PRODUCT_POPUP_DATA } from "../../Utils/Constants/StaticData";
import notify from "./../../Utils/Helpers/notifyToast";

import Button from "../Button";
import { Checkbox } from "@mui/material";
import { ReactComponent as PlusIcon } from "../../Assets/AddProduct/Plus.svg";
import { ReactComponent as DeleteIcon } from "../../Assets/AddProduct/Delete.svg";

function AddProduct({ closePopupFunction }) {
  const addImageInputRef = useRef();
  const formRef = useRef();

  const [images, setImages] = React.useState([]);
  const [specifications, setSpecifications] = React.useState([]);

  const [hasVariousSizes, setHasVariousSizes] = React.useState(false);
  const [sizes, setSizes] = React.useState([]);

  const [isCustomizable, setIsCustomizable] = React.useState(false);
  const [requiredAttachments, setRequiredAttachments] = React.useState([]);

  const addProduct = async (e) => {
    e.preventDefault();

    resetForm();
    console.log("addProduct");
    closePopupFunction();
  };

  const handleFileChange = (e) => {
    const [file] = addImageInputRef.current.files;
    try {
      if (file) {
        notify("Uploading profile picture...", "info");

        let src = URL.createObjectURL(file);
        setImages([...images, src]);

        // await upload picture

        notify("Profile picture updated successfully", "success");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response);
      notify(err, "error");
    }
  };

  const addSpecification = (e) => {
    e.preventDefault();
    setSpecifications([
      ...specifications,
      {
        key: "",
        value: "",
      },
    ]);
  };

  const removeSpecification = (index) => {
    setSpecifications(specifications.filter((_, i) => i !== index));
  };

  const discardChanges = () => {
    resetForm();
    closePopupFunction();
  };

  const checkBoxSX = {
    padding: "0.4rem",
    borderWidth: 0,
    color: "var(--primary-blue)",
    "@media (max-width: 380px)": {
      padding: "0.1rem",
    },
    "&.Mui-checked": {
      color: "var(--primary-blue)",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "var(--font-22)",
    },
  };

  const resetForm = () => {
    formRef.current.reset();
    setImages([]);
    setSpecifications([]);
    setHasVariousSizes(false);
    setSizes([]);
    setIsCustomizable(false);
    setRequiredAttachments([]);
  };

  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.HeadingPrimary}>{ADD_PRODUCT_POPUP_DATA.title}</h3>
      <form className={styles.Form} onSubmit={addProduct} ref={formRef}>
        <div className={styles.PrimaryInfoSec}>
          <div className={styles.PrimaryInfoSecKeyValuePair}>
            <label className={styles.PrimaryInfoSecKey}>
              {ADD_PRODUCT_POPUP_DATA.feilds.title.label}
            </label>
            <input
              type="text"
              placeholder={ADD_PRODUCT_POPUP_DATA.feilds.title.placeholder}
              className={
                styles.Input +
                " " +
                styles.PrimaryInfoSecValue +
                " " +
                styles.Title
              }
              id="AddAdressTitle"
            />
          </div>
          <div className={styles.PrimaryInfoSecKeyValuePair}>
            <label className={styles.PrimaryInfoSecKey}>
              {ADD_PRODUCT_POPUP_DATA.feilds.price.label}
            </label>
            <input
              type="number"
              placeholder={ADD_PRODUCT_POPUP_DATA.feilds.price.placeholder}
              className={
                styles.Input +
                " " +
                styles.PrimaryInfoSecValue +
                " " +
                styles.Price
              }
              id="AddAdressPrice"
            />
          </div>
        </div>
        <div className={styles.ImagesSec}>
          <h4 className={styles.Heading}>{ADD_PRODUCT_POPUP_DATA.images}</h4>
          <div className={styles.ImagesList}>
            {images.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="product"
                  key={index}
                  className={styles.Image}
                  onLoad={(e) => {
                    e.target.style.opacity = 1;
                  }}
                />
              );
            })}
            <div className={styles.AddImageButtonWrapper}>
              <Button
                name={ADD_PRODUCT_POPUP_DATA.addImage}
                primaryColor={`var(--primary-blue)`}
                wrapperClass={
                  styles.GeneralButton + " " + styles.AddImageButton
                }
                inverted
                withIcon
                IconComp={PlusIcon}
                onClick={(e) => {
                  e.preventDefault();
                  addImageInputRef.current.click();
                }}
              />
              <input
                type="file"
                ref={addImageInputRef}
                className={styles.AddImageInput}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.SpecificationSec}>
          <h4 className={styles.Heading}>
            {ADD_PRODUCT_POPUP_DATA.specifications}
          </h4>
          <div className={styles.SpecificationList}>
            {specifications.map((specification, index) => {
              return (
                <div className={styles.Specification} key={index}>
                  <input
                    type="text"
                    placeholder={
                      ADD_PRODUCT_POPUP_DATA.specificationsPlaceholders.key
                    }
                    className={styles.Input + " " + styles.SpecificationKey}
                    value={specification.key}
                    onChange={(e) => {
                      setSpecifications(
                        specifications.map((spec, i) => {
                          if (i === index) {
                            return {
                              ...spec,
                              key: e.target.value,
                            };
                          }
                          return spec;
                        })
                      );
                    }}
                  />
                  <input
                    type="text"
                    placeholder={
                      ADD_PRODUCT_POPUP_DATA.specificationsPlaceholders.value
                    }
                    className={styles.Input + " " + styles.SpecificationValue}
                    value={specification.value}
                    onChange={(e) => {
                      setSpecifications(
                        specifications.map((spec, i) => {
                          if (i === index) {
                            return {
                              ...spec,
                              value: e.target.value,
                            };
                          }
                          return spec;
                        })
                      );
                    }}
                  />
                  <div
                    className={styles.DeleteSpecificationButtonWrapper}
                    onClick={() => removeSpecification(index)}
                  >
                    <DeleteIcon className={styles.DeleteIcon} />
                  </div>
                </div>
              );
            })}
            <div className={styles.AddSpecificationButtonWrapper}>
              <Button
                name={ADD_PRODUCT_POPUP_DATA.addSpecificationItem}
                primaryColor={`var(--primary-blue)`}
                wrapperClass={
                  styles.GeneralButton + " " + styles.AddSpecificationButton
                }
                inverted
                withIcon
                IconComp={PlusIcon}
                onClick={addSpecification}
              />
            </div>
          </div>
        </div>
        <div className={styles.SizeSec}>
          <h4 className={styles.Heading}>
            {ADD_PRODUCT_POPUP_DATA.variousSizes}{" "}
            <Checkbox
              onChange={(e) => {
                setHasVariousSizes(e.target.checked);
                if (e.target.checked) {
                  setSizes([""]);
                }
              }}
              checked={hasVariousSizes}
              sx={checkBoxSX}
            />
          </h4>
          {hasVariousSizes && (
            <div className={styles.SizeListWrapper}>
              <h5 className={styles.SubHeading}>
                {ADD_PRODUCT_POPUP_DATA.availableSizes}
              </h5>
              <div className={styles.SizeList}>
                {sizes.map((size, index) => {
                  return (
                    <input
                      type="text"
                      key={index}
                      value={size}
                      className={styles.Input + " " + styles.SizeInput}
                      onChange={(e) => {
                        setSizes(
                          sizes.map((spec, i) => {
                            if (i === index) {
                              return e.target.value;
                            }
                            return spec;
                          })
                        );
                      }}
                    />
                  );
                })}
                <div className={styles.AddSizeButtonWrapper}>
                  <Button
                    name={ADD_PRODUCT_POPUP_DATA.addSizeVarient}
                    primaryColor={`var(--primary-blue)`}
                    wrapperClass={
                      styles.GeneralButton + " " + styles.AddSizeButton
                    }
                    inverted
                    withIcon
                    IconComp={PlusIcon}
                    onClick={(e) => {
                      e.preventDefault();
                      setSizes([...sizes, ""]);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.CustomizationSec}>
          <h4 className={styles.Heading}>
            {ADD_PRODUCT_POPUP_DATA.customisable}
            <Checkbox
              onChange={(e) => {
                setIsCustomizable(e.target.checked);
                if (e.target.checked) {
                  setRequiredAttachments([
                    {
                      title: "",
                      description: "",
                    },
                  ]);
                }
              }}
              checked={isCustomizable}
              sx={checkBoxSX}
            />
          </h4>
          {isCustomizable && (
            <div className={styles.CustomizationListWrapper}>
              <h5 className={styles.SubHeading}>
                {ADD_PRODUCT_POPUP_DATA.requiredAttachments}
              </h5>
              <div className={styles.CustomizationList}>
                {requiredAttachments.map((attachmentInfo, index) => {
                  return (
                    <div className={styles.Customization} key={index}>
                      <div className={styles.AttachmentInfoLeft}>
                        <div className={styles.AttachmentInfoIndex}>
                          {index + 1}
                        </div>
                      </div>
                      <div className={styles.AttachmentInfoRight}>
                        <input
                          type="text"
                          placeholder={
                            ADD_PRODUCT_POPUP_DATA.customisePlaceholders.title
                          }
                          className={
                            styles.Input + " " + styles.CustomizationTitle
                          }
                          value={attachmentInfo.title}
                          onChange={(e) => {
                            setRequiredAttachments(
                              requiredAttachments.map((attachment, i) => {
                                if (i === index) {
                                  return {
                                    ...attachment,
                                    title: e.target.value,
                                  };
                                }
                                return attachment;
                              })
                            );
                          }}
                        />
                        <textarea
                          type="text"
                          placeholder={
                            ADD_PRODUCT_POPUP_DATA.customisePlaceholders
                              .description
                          }
                          className={
                            styles.Input + " " + styles.CustomizationDescription
                          }
                          value={attachmentInfo.description}
                          onChange={(e) => {
                            setRequiredAttachments(
                              requiredAttachments.map((attachment, i) => {
                                if (i === index) {
                                  return {
                                    ...attachment,
                                    description: e.target.value,
                                  };
                                }
                                return attachment;
                              })
                            );
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className={styles.AddCustomizationButtonWrapper}>
                  <Button
                    name={ADD_PRODUCT_POPUP_DATA.addAttachmentInfo}
                    primaryColor={`var(--primary-blue)`}
                    wrapperClass={
                      styles.GeneralButton + " " + styles.AddCustomizationButton
                    }
                    inverted
                    withIcon
                    IconComp={PlusIcon}
                    onClick={(e) => {
                      e.preventDefault();
                      setRequiredAttachments([
                        ...requiredAttachments,
                        {
                          title: "",
                          description: "",
                        },
                      ]);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.ButtonsWrapper}>
          <Button
            name={ADD_PRODUCT_POPUP_DATA.addProduct}
            primaryColor={`var(--primary-blue)`}
            wrapperClass={styles.SubmitButton}
          />
          <div className={styles.DiscardButtonWrapper} onClick={discardChanges}>
            {ADD_PRODUCT_POPUP_DATA.discard}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
