package com.lnk.pojo;

import com.lnk.pojo.Menus;
import com.lnk.pojo.OrderDetail;
import com.lnk.pojo.Reviews;
import com.lnk.pojo.Stores;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-12-05T17:02:28", comments="EclipseLink-2.7.9.v20210604-rNA")
@StaticMetamodel(Foods.class)
public class Foods_ { 

    public static volatile SingularAttribute<Foods, Long> price;
    public static volatile SingularAttribute<Foods, String> foodType;
    public static volatile SingularAttribute<Foods, Integer> foodId;
    public static volatile SingularAttribute<Foods, String> name;
    public static volatile SingularAttribute<Foods, Menus> menuId;
    public static volatile SingularAttribute<Foods, String> imgfood;
    public static volatile SingularAttribute<Foods, Stores> storeId;
    public static volatile SetAttribute<Foods, Reviews> reviewsSet;
    public static volatile SetAttribute<Foods, OrderDetail> orderDetailSet;
    public static volatile SingularAttribute<Foods, String> status;

}