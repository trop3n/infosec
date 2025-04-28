String hql = "FROM user WHERE username = :username";
Query query = session.createQuery(hql);
query.setParameter("username", username);
List results = query.list();